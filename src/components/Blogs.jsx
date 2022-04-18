import React from 'react';
import Link from 'next/link';

const Blogs = () => {
	return (
		<section className="blog-grid section-padding position-re" id="blogs">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8 col-md-10">
						<div className="s-head text-center mb-80">
							<h6 className="stit mb-30">
								<span className="left"></span>
								Recent Articles
								<span className="right"></span>
							</h6>
							<h2> From Our Blogs</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
						<div className="item bg-img" style={{ backgroundImage: 'url(./img/blog/1.jpg)' }}>
							<div className="cont">
								<Link href="/blog/blog-dark">
									<a className="date">
										<span>
											<i>06</i> Aug 2022
										</span>
									</a>
								</Link>
								<div className="info">
									<a href="#0" className="author">
										<span>by / Admin</span>
									</a>
									<Link href="/blog/blog-dark">
										<a className="tag">
											<span>WordPress</span>
										</a>
									</Link>
								</div>
								<h6>
									<Link href="/blog-details/blog-details-dark">
										<a>The Start-Up Ultimate Guide to Make Your WordPress Journal.</a>
									</Link>
								</h6>
								<div className="btn-more">
									<Link href="/blog-details/blog-details-dark">
										<a className="simple-btn">Read More</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
						<div
							className="item active bg-img"
							style={{ backgroundImage: 'url(./img/blog/2.jpg)' }}
						>
							<div className="cont">
								<Link href="/blog/blog-dark">
									<a className="date">
										<span>
											<i>06</i> Aug 2022
										</span>
									</a>
								</Link>
								<div className="info">
									<a href="#0" className="author">
										<span>by / Admin</span>
									</a>
									<Link href="/blog/blog-dark">
										<a className="tag">
											<span>WordPress</span>
										</a>
									</Link>
								</div>
								<h6>
									<Link href="/blog-details/blog-details-dark">
										<a>The Start-Up Ultimate Guide to Make Your WordPress Journal.</a>
									</Link>
								</h6>
								<div className="btn-more">
									<Link href="/blog-details/blog-details-dark">
										<a className="simple-btn">Read More</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
						<div className="item bg-img" style={{ backgroundImage: 'url(./img/blog/3.jpg)' }}>
							<div className="cont">
								<Link href="/blog/blog-dark">
									<a className="date">
										<span>
											<i>06</i> Aug 2022
										</span>
									</a>
								</Link>
								<div className="info">
									<a href="#0" className="author">
										<span>by / Admin</span>
									</a>
									<Link href="/blog/blog-dark">
										<a className="tag">
											<span>WordPress</span>
										</a>
									</Link>
								</div>
								<h6>
									<Link href="/blog-details/blog-details-dark">
										<a>The Start-Up Ultimate Guide to Make Your WordPress Journal.</a>
									</Link>
								</h6>
								<div className="btn-more">
									<Link href="/blog-details/blog-details-dark">
										<a className="simple-btn">Read More</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="line top right"></div>
			<div className="line bottom left"></div>
		</section>
	);
};

export default Blogs;
